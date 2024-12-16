import supabase from "../main";

const auth = {
  logout: function () {},
  login: function () {},
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
