const oauth = {
  kakao: {
    provider: "kakao",
    options: {
      redirectTo: import.meta.VITE_KAKAO_AUTH_REDIRECT_TO,
    },
  },
  google: {
    provider: "google",
    options: {
      redirectTo: import.meta.VITE_GOOGLE_AUTH_REDIRECT_TO,
    },
  },
};

export default oauth;
