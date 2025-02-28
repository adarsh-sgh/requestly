import { CONSTANTS as GLOBAL_CONSTANTS } from "@requestly/requestly-core";

const LINKS = {
  /** DOCS */

  // Download
  REQUESTLY_DOWNLOAD_PAGE: "https://requestly.com/downloads",
  REQUESTLY_DOCS: "https://developers.requestly.io/",
  //Docs - Using Rules
  REQUESTLY_DOCS_USING_RULES: "https://docs.requestly.io/using-rules/",
  //Docs -Sharing Rules
  REQUESTLY_DOCS_SHARING_RULES: "https://docs.requestly.io/managing-rules/sharing",
  //Docs - File Service
  REQUESTLY_DOCS_FILES_SERVICE: "https://docs.requestly.io/library/introduction-to-library",

  // Docs - Premium Subscription
  REQUESTLY_DOCS_PREMIUM_SUBSCRIPTION: "https://docs.requestly.io/premium-subscription",

  // Docs - Premium Subscription
  REQUESTLY_DOCS_TEAM_SUBSCRIPTION: "https://docs.requestly.io/premium-subscription#for-teams",

  // Docs - Mock Server
  REQUESTLY_DOCS_MOCK_SERVER: "https://docs.requestly.io/using-rules/mock-server",

  // Docs - Backup Data
  REQUESTLY_DOCS_BACKUP_DATA: "https://docs.requestly.io/managing-rules/backup-and-restore",

  // Docs - Extension Troubleshooting
  REQUESTLY_EXTENSION_TROUBLESHOOTING: "https://docs.requestly.io/troubleshooting",

  REQUESTLY_EXTENSION_RULES_NOT_WORKING:
    "https://docs.requestly.io/browser-extension/chrome/troubleshooting/rules-not-working",

  // Docs - Mock GraphQL API response
  REQUESTLY_DOCS_MOCK_GRAPHQL: "https://developers.requestly.io/http-rules/graphql-support",

  // Docs - HTTP modifications
  REQUESTLY_DOCS_HTTP_MODIFICATIONS: "https://docs.requestly.io/browser-extension/chrome/http-modifications/overview",

  // Docs - Source Filters
  REQUESTLY_DOCS_SOURCE_FILTERS: "https://docs.requestly.com/general/http-rules/advanced-usage/advance-targeting",

  // Docs - Import rules from charles proxy
  REQUESTLY_DOCS_IMPORT_SETTINGS_FROM_CHARLES: "https://developers.requestly.com/http-rules/import-from-charles/",

  // Docs - Test URL condition
  REQUESTLY_DOCS_TEST_URL_CONDITION:
    "https://docs.requestly.com/general/http-rules/others/http-rules-testing/test-url-condition",

  REQUESTLY_DOCS_SESSION_RECORDING_ARCHITECTURE: "https://developers.requestly.io/sessions/architecture/",

  REQUESTLY_API_DOCS: "https://developers.requestly.io/api/overview/",

  REQUESTLY_REDIRECT_RULE_DOCS: "https://developers.requestly.com/http-rules/map-local-url-redirect",
  REQUESTLY_CANCEL_RULE_DOCS: "https://developers.requestly.com/http-rules/cancel-rule/",
  REQUESTLY_DELAY_RULE_DOCS: "https://developers.requestly.com/http-rules/delay-request/",
  REQUESTLY_HEADERS_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-headers/",
  REQUESTLY_QUERYPARAM_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-query-params/",
  REQUESTLY_REPLACE_RULE_DOCS: "https://developers.requestly.com/http-rules/replace-strings/",
  REQUESTLY_REQUEST_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-request-body/",
  REQUESTLY_RESPONSE_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-response-body/",
  REQUESTLY_SCRIPT_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-dom-inject-scripts/",
  REQUESTLY_USERAGENT_RULE_DOCS: "https://developers.requestly.com/http-rules/modify-user-agents/",

  REQUESTLY_HEADERS_RULE_FAQ_LINK:
    "https://docs.requestly.com/general/http-rules-(modify-traffic)/rule-types/modify-headers#faqs",

  REQUESTLY_NETWORK_INSPECTOR_DOCS:
    "https://docs.requestly.com/guides/inspect-traffic-and-apply-modifications-from-chrome-devtools-using-requestly",

  /** LANDING PAGES **/

  // Home
  REQUESTLY_LANDING_HOME: "https://requestly.com/",
  //Blog
  REQUESTLY_BLOG: "https://requestly.com/blog/",
  //Desktop App
  REQUESTLY_DESKTOP_APP: "https://requestly.com/desktop",
  //Privacy Policy
  REQUESTLY_PRIVACY_POLICY: "https://requestly.com/privacy",
  // Terms and Conditions
  REQUESTLY_TERMS_AND_CONDITIONS: "https://requestly.com/terms/",
  //Privacy Statement
  REQUESTLY_PRIVACY_STATEMENT: "https://requestly.com/privacy/",
  //Contact Us
  CONTACT_US: "mailto:" + GLOBAL_CONSTANTS.COMPANY_INFO.SUPPORT_EMAIL,
  // Contact Us Page
  CONTACT_US_PAGE: "https://requestly.com/contact-us/",
  // Book A Demo
  BOOK_A_DEMO: "https://calendly.com/requestly/sagar",

  /** SUPPORT */

  //Github Issues
  REQUESTLY_GITHUB_ISSUES: "https://github.com/requestly/customer-support/issues",
  FEEDBACK: "https://feedback.requestly.io/",

  /** EXTENSIONS */

  //Chrome
  CHROME_EXTENSION:
    "https://chromewebstore.google.com/detail/requestly-intercept-modif/mdnleldcmiljblolnjhpnblkcekpdkpa",

  CHROME_STORE_REVIEWS:
    "https://chromewebstore.google.com/detail/requestly-intercept-modif/mdnleldcmiljblolnjhpnblkcekpdkpa/reviews",
  //Firefox
  FIREFOX_EXTENSION: "https://app.requestly.in/firefox/builds/requestly-latest.xpi",
  //Edge
  EDGE_EXTENSION:
    "https://microsoftedge.microsoft.com/addons/detail/requestly-redirect-url-/ehghoapnlpepjmfbgaomdiilchcjemak",
  /** GDPR */
  GDPR: {
    GDPR_PAGE: "https://privacy.requestly.io/",
    EXPORT_DATA: "https://privacy.requestly.io/data_requests",
    DELETE_ACCOUNT: "https://privacy.requestly.io/data_requests",
    SIGN_DPA: "https://privacy.requestly.io/dpa",
  },

  /** TUTORIALS */
  YOUTUBE_TUTORIALS: "https://www.youtube.com/playlist?list=PLmHjVvTu_7ddFIIT9AkZ7p0lrC5gBuyb6",

  TUTORIALS: {
    REDIRECT_RULE: "https://youtu.be/lOt1kGKTq-w",
  },

  DEMO_VIDEOS: {
    TEAM_WORKSPACES: "https://www.youtube.com/watch?v=xF5M_z4O5zg",
  },

  DOWNLOAD_DESKTOP_APP: {
    MACOS: "https://bit.ly/rq-mac",
    WINDOWS: "https://bit.ly/rq-windows",
    LINUX: "https://bit.ly/rq-linux",
  },

  PRODUCTLIFT_CHANGELOG: "https://requestly.productlift.dev/",

  CALENDLY_LINK: "https://calendly.com/requestly/sagar",

  ACCELERATOR_PROGRAM_FORM_LINK: "https://app.formbricks.com/s/cm1ewcpkt0000djs29ct7rpy2",
};

export default LINKS;
