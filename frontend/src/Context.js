import React, { Component } from "react";

const MainContext = React.createContext(null);

class MainProvider extends Component {
  state = {
    tweetData: {
      currentTweet: ""
    },
    profileData: {
      username: "",
      bio: "",
      following: "",
      followers: "",
      posts: ""
    },
    settingsData: {
      themeMode: true,
      changePassword: {
        main: "",
        confirmation: ""
      }
    },
    search: '',
    nav: 0
  };

  change = {
    currentTweet: e => {
      this.setState(state => ({
        ...state,
        tweetData: {
          currentTweet: e.target.innerHTML
        }
      }));
    },
    profileData: e => {
      switch (e.target.getAttribute("id")) {
        case "username":
          this.setState(state => ({
            ...state,
            profileData: {
              ...state.profileData,
              username: e.target.innerHTML
            }
          }));
          break;
        case "bio":
          this.setState(state => ({
            ...state,
            profileData: {
              ...state.profileData,
              bio: e.target.innerHTML
            }
          }));
          break;
        default:
          break;
      }
    },
    settingsData: e => {
      switch (e.target.getAttribute("id")) {
        case "themeMode":
          this.setState(state => ({
            ...state,
            settingsData: {
              ...state.settingsData,
              themeMode: !state.themeMode
            }
          }));
          break;
        case "mainPassword":
          this.setState(state => ({
            ...state,
            settingsData: {
              ...state.settingsData,
              changePassword: {
                ...state.settingsData.changePassword,
                main: e.target.value
              }
            }
          }));
          break;
        case "confirmPassword":
          this.setState(state => ({
            ...state,
            settingsData: {
              ...state.settingsData,
              changePassword: {
                ...state.settingsData.changePassword,
                confirmation: e.target.value
              }
            }
          }));
          break;
        default:
          break;
      }
    },

    setSearch: e => {
      e.preventDefault();
      const value = e.target.value;
      this.setState(state => ({
        ...state,
        search: value
      }))
    },
    setNav: (num) => {
      this.setState(state => ({
        ...state,
        nav: num
      }))
    }
  };

  render() {
    return (
      <MainContext.Provider value={{ ...this.state, methods: this.change }}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

const MainConsumer = MainContext.Consumer;

export { MainContext, MainProvider, MainConsumer };
