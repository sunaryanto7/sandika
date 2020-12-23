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
          autoplay: true,
          delay: 5000,
          loop: true,
        },
        productSlider: {
          autoPlay: true,
          items: 2,
          dots: false,
          nav: false,
          stagePadding: 0,
          loop: true,
          margin: 10,
          autoHeight: true
        }
      }
    },
    productMedia: {
      enable: true,
      version: 1,
      config: {
        imageSlider: {
          items: 1,
          dots: false,
          nav: false,
          loop: true,
          center: true
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
          enable: false,
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
          enable: false,
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
          enable: false,
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
          enable: false,
          version: 1
        }
      }
    }
  }
};

export default store;