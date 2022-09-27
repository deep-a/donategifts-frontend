// https://github.com/pmndrs/zustand

import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import logger from '@common/utils/logger';

const initialState = {
  isLoggedIn: false,
  user: {},
  apiError: {}
};

const useUserStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      setIsLoggedIn: () => {
        set(
          produce((state) => {
            state.isLoggedIn = true;
          })
        );
      },

      setUserData: ({ jwt, user }) => {
        set(
          produce((state) => {
            state.jwt = jwt;
            state.user = {
              ...user
            };
          })
        );
      },

      login: async ({ jwt }) => {
        const { data } = await axios({
          url: `${process.env.API_ENDPOINT}/user`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });

        get().setIsLoggedIn();
        get().setUserData({ user: data, jwt });
      },

      logout: () => {
        // reset store to initial on logout
        get().reset();
      },

      registerUser: async (payload) => {
        const { firstName, lastName, jwt } = payload;

        try {
          const { data } = await axios({
            url: `${process.env.API_ENDPOINT}/user`,
            method: 'POST',
            headers: {
              Authorization: `Bearer ${jwt}`
            },
            data: {
              firstName,
              lastName
            }
          });

          if (data) {
            get().setUserData({ user: data, jwt });
            get().setIsLoggedIn();
          }
        } catch (error) {
          logger.error('API ERROR ENCOUNTERED', { ...error.response });

          set((state) => {
            state.apiError = error.reponse;
          });
        }
      },

      reset: () => {
        set(initialState, true);
      }
    }),
    {
      name: 'user-storage', // name of item in the storage (must be unique)
      getStorage: () => localStorage // (optional) by default the 'localStorage' is used
    }
  )
);

export default useUserStore;
