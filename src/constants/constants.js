const BACKEND_URL = `http://marketplace.node.ed.asmer.org.ua/`;
const BACKEND_URL_QUERY = `${BACKEND_URL}graphql`;
const BACKEND_URL_UPLOAD = `${BACKEND_URL}upload`;
// const EMAIL_REGEXP = new RegExp(/^\S+@\S+\.\S+/);
const EMAIL_REGEXP = new RegExp(/\w/g);
const PASSWORD_REGEXP = new RegExp(/^\w{3,20}$/g);

const tagList = [
  "Auto",
  "Business services",
  "Mutual Aid",
  "Child's world",
  "House and garden",
  "Animals",
  "Spare parts for transport",
  "Health and beauty",
  "Fashion & style",
  "Real estate",
  "Give for free",
  "Work",
  "Hobby, recreation and sports",
  "Electronics",
  "Other"
];

export {BACKEND_URL, BACKEND_URL_QUERY, BACKEND_URL_UPLOAD, EMAIL_REGEXP, PASSWORD_REGEXP, tagList};
