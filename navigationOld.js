window.MyNavigation = {
    "header": {
      "userId": "2a4dfab9-34ac-427d-9f69-6133b507ead8",
      "organisationId": "f64b9358-3cb2-4c87-8a93-146e49317d8e",
      "locale": "en-US",
      "userCountry": "US",
      "orgRegion": "US",
      "selectedTabName": "none",
      "substitutions": {
        "environmentIdentifierToken": "Hubdoc.com",
        "organisationShortCodeToken": "!-jCNg",
        "organisationIdToken": "f64b9358-3cb2-4c87-8a93-146e49317d8e",
        "practiceShortCodeToken": null,
        "organisationIdSecureStringToken": "ZjY0YjkzNTgtM2NiMi00Yzg3LThhOTMtMTQ2ZTQ5MzE3ZDhl-POFwINCPxvA=",
        "previousPaidOrgShortCodeToken": "!G!hH0",
        "helpRegionToken": null
      }
    },
    "menuItems": [
      {
        "id": 1,
        "name": "organisation-menu",
        "label": "",
        "analyticsId": "organisation-menu",
        "openInNewWindow": false,
        "children": [
          {
            "isCurrentOrg": true,
            "id": 0,
            "name": "!-jCNg",
            "label": "Hubdoc",
            "analyticsId": "",
            "url": "https://go.xero.com/OrganisationLogin/?shortCode=!-jCNg",
            "openInNewWindow": false,
            "children": []
          },
          {
            "type": "demo",
            "isCurrentOrg": false,
            "id": 1,
            "name": "!G!hH0",
            "label": "Demo Company (US)",
            "analyticsId": "",
            "url": "https://go.xero.com/OrganisationLogin/?shortCode=!G!hH0",
            "openInNewWindow": false,
            "children": []
          },
          {
            "type": "link-add",
            "isCurrentOrg": false,
            "id": 100,
            "name": "organisation-menu/add-organisation",
            "label": "Add a new organisation",
            "analyticsId": "add-organisation",
            "url": "https://my.xero.com/!xkcD/Organisation/Setup",
            "openInNewWindow": false,
            "children": []
          }
        ]
      },
      
      {
        "id": 1,
        "name": "banner",
        "label": "",
        "analyticsId": "banner",
        "openInNewWindow": false,
        "children": []
      },

      {
        "id": 1,
        "name": "partner-apps-menu",
        "label": "",
        "analyticsId": "partner-apps-menu",
        "openInNewWindow": false,
        "children": [
          {
            "id": 101,
            "name": "partner-apps-menu/my-xero",
            "label": "My Xero",
            "analyticsId": "my-xero",
            "url": "https://my.xero.com/",
            "openInNewWindow": true,
            "children": []
          }
        ]
      },

      {
        "id": 1,
        "name": "application-menu",
        "label": "",
        "analyticsId": "application-menu",
        "openInNewWindow": false,
        "children": [
          {
            "type": "business",
            "heading": "Xero",
            "displayText": "X",
            "id": 100,
            "name": "application-menu/xero",
            "label": "Xero",
            "analyticsId": "xero",
            "openInNewWindow": false,
            "children": []
          }
        ]
      },

      {
        "id": 2,
        "name": "navigation-menu",
        "label": "",
        "analyticsId": "navigation-menu",
        "openInNewWindow": false,
        "children": [
          {
            "id": 201,
            "name": "navigation-menu/dashboard",
            "label": "Add Account",
            "analyticsId": "addaccount",
            "url": "/addaccount",
            "openInNewWindow": false,
            "children": []
          },
          {
            "id": 202,
            "name": "navigation-menu/business",
            "label": "Upload Document",
            "analyticsId": "uploaddocument",
            "url": "/uploaddocument",
            "openInNewWindow": false,
            "children": []
          }
        ]
      },

      {
        "id": 1,
        "name": "user-menu",
        "label": "",
        "analyticsId": "user-menu",
        "openInNewWindow": false,
        "children": [
          {
            "userInfo": "Marco Di Domenico",
            "identifier": "marco.didomenico@xero.com",
            "id": 100,
            "name": "user-menu/user-info",
            "label": "Marco Di Domenico",
            "analyticsId": "user-info",
            "openInNewWindow": false,
            "children": []
          },
          {
            "type": "profile",
            "id": 101,
            "name": "user-menu/profile",
            "label": "Edit profile",
            "analyticsId": "profile",
            "url": "https://my.xero.com/Go/UserProfile",
            "openInNewWindow": false,
            "children": []
          },
          {
            "id": 102,
            "name": "user-menu/account",
            "label": "Account",
            "analyticsId": "account",
            "url": "https://my.xero.com/Go/MyAccount",
            "openInNewWindow": false,
            "children": []
          },
          {
            "type": "logout",
            "icon": "lock",
            "id": 104,
            "name": "user-menu/log-out",
            "label": "Log out",
            "analyticsId": "log-out",
            "url": "https://go.xero.com/logout",
            "openInNewWindow": false,
            "children": []
          }
        ]
      },

      {
        "id": 2,
        "name": "addons-menu",
        "label": "",
        "analyticsId": "addons-menu",
        "openInNewWindow": false,
        "children": [
          {
            "type": "standard",
            "icon": "search",
            "scriptUrl": "https://edge.xero.com/business/search/1.11.1/insert-iframe-min.js",
            "scriptIntegrity": "sha384-c1OmyiHlJU6xCUx3cZcPEYbsK0rAJFcJHHEomZ4PItp9Vyq84AlTiN8lyVkmU8wS",
            "qaHook": "xrh-addon-search",
            "options": {
              "baseUrl": "https://edge.xero.com/business/search/1.11.1"
            },
            "id": 201,
            "name": "addons-menu/search",
            "label": "Search",
            "analyticsId": "search",
            "openInNewWindow": false,
            "children": []
          },
        ]
      }
    ]
  }