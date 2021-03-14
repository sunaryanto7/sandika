const store = {
  host: 'http://localhost:3000/',
  graphqlHost: 'http://localhost:9200',
  lang: 'id',
  port: '3000',
  config: {
    slider: {
      enable: true,
      version: 1,
      config: {
        imageSlider: {
          spaceBetween: 0,
          slidesPerView: 1,
          navigation: false,
          autoplay: true,
          delay: 5000,
          loop: true
        },
        productSlider: {
          spaceBetween: 10,
          slidesPerView: 2,
          navigation: false,
          autoplay: true,
          delay: 5000,
          loop: true
        }
      }
    },
    productMedia: {
      enable: true,
      version: 1,
      config: {
        imageSlider: {
          spaceBetween: 0,
          slidesPerView: 1,
          navigation: false,
          autoplay: true,
          delay: 5000,
          loop: true
        }
      }
    }
  },
  page: {
    home: {
      enable: true,
      layout: {
        header: {
          enable: true,
          version: 1,
          props: {
            withNavigation: false,
            withAppName: true,
            withMinicart: true,
            withSearch: true
          }
        },
        newsletter: {
          enable: true,
          version: 1,
        },
        navigation: {
          enable: true,
          version: 1,
          props: {
            active: 'home',
            search: {
              enable: true,
              type: 'drawer'
            }
          }
        },
        footer: {
          enable: true,
          version: 1
        }
      }
    },
    category: {
      enable: true,
      layout: {
        header: {
          enable: true,
          version: 1,
          props: {
            withNavigation: true,
            withAppName: true,
            withMinicart: true,
            withSearch: false
          }
        },
        newsletter: {
          enable: true,
          version: 1,
        },
        navigation: {
          enable: false,
          version: 1,
          props: {
            active: 'home',
            search: {
              enable: true,
              type: 'drawer'
            }
          }
        },
        footer: {
          enable: true,
          version: 1
        }
      }
    },
    product: {
      enable: true,
      layout: {
        header: {
          enable: true,
          version: 1,
          props: {
            withNavigation: true,
            withAppName: true,
            withMinicart: true,
            withSearch: true
          }
        },
        newsletter: {
          enable: true,
          version: 1,
        },
        navigation: {
          enable: false,
          version: 1,
          props: {
            active: 'home',
            search: {
              enable: true,
              type: 'drawer'
            }
          }
        },
        footer: {
          enable: true,
          version: 1
        }
      }
    },
    cart: {
      enable: true,
      layout: {
        header: {
          enable: true,
          version: 1,
          props: {
            withNavigation: true,
            withAppName: true,
            withMinicart: true,
            withSearch: false
          }
        },
        newsletter: {
          enable: true,
          version: 1,
        },
        navigation: {
          enable: false,
          version: 1,
          props: {
            active: 'cart',
            search: {
              enable: true,
              type: 'drawer'
            }
          }
        },
        footer: {
          enable: true,
          version: 1
        }
      }
    }
  }
};

export default store;
