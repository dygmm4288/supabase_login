import _ from "lodash";
import supabase from "../main";
import oauth from "./oauth";

const auth = {
  updateUser: async function (newEmail) {
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail,
    });
    if (error) throw new Error(error);

    return data;
  },
  getUser: async function () {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  },
  refreshSession: async function () {
    const { data, error } = await supabase.auth.refreshSession();
    if (error) throw new Error(error);

    return data;
  },
  getSession: async function () {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error(error);

    return data;
  },
  resetPassword: async function (email, redirectTo) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) throw new Error(error);

    return data;
  },
  logout: async function () {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error);

    return null;
  },
  loginWithEmail: async function (email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error);

    return data;
  },
  loginWithOAuth: async function (providerName) {
    const signOption = _.get(oauth, providerName);

    if (!signOption) throw new Error("No Provider Options");

    const { data, error } = await supabase.auth.signInWithOAuth({
      ...signOption,
    });

    if (error) throw new Error(error);

    return data;
  },
  signup: async function (email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new Error(error);

    return data;
  },
};

export default auth;
