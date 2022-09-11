import React from 'react';
import { useQuery, useMutation } from 'react-query';

import { AUTH_USER } from '../constants/queryKey';
import { query_client } from '../libs/ReactQuery';

export function AuthContext(config) {
  const AuthContext = React.createContext(null);
  AuthContext.displayName = 'AuthContext';

  const {
    loadUser,
    loginFn,
    logoutFn,
    registerFn,
    key = AUTH_USER,
    waitInitial = true,
    LoaderComponent = () => <></>,
    ErrorComponent = (error) => <div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>,
  } = config;

  function AuthProvider({ children }) {
    const { data: user, error, status, isLoading, isIdle, isSuccess, refetch } = useQuery({ queryKey: key, queryFn: loadUser });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setUser = React.useCallback((data) => query_client.setQueryData(key, data), [query_client]);
    const loginMutation = useMutation({
      mutationFn: loginFn,
      onSuccess: (user) => {
        setUser(user);
      },
    });
    const registerMutation = useMutation({
      mutationFn: registerFn,
      onSuccess: (user) => {
        setUser(user);
      },
    });
    const logoutMutation = useMutation({
      mutationFn: logoutFn,
      onSuccess: () => {
        query_client.clear();
      },
    });
    const value = React.useMemo(
      () => ({
        user,
        error,
        refetchUser: refetch,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isLoading,
        logout: logoutMutation.mutateAsync,
        isLoggingOut: logoutMutation.isLoading,
        register: registerMutation.mutateAsync,
        isRegistering: registerMutation.isLoading,
      }),
      [user, error, refetch, loginMutation.mutateAsync, loginMutation.isLoading, logoutMutation.mutateAsync, logoutMutation.isLoading, registerMutation.mutateAsync, registerMutation.isLoading]
    );

    if (isSuccess || !waitInitial) {
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }

    if (isLoading || isIdle) {
      return <LoaderComponent />;
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }

    return <div>Unhandled status: {status}</div>;
  }
  function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
      throw new Error(`useAuth must be used within an AuthProvider`);
    }
    return context;
  }
  return { AuthProvider, AuthConsumer: AuthContext.Consumer, useAuth };
}
