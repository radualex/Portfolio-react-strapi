require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    defaultTitle: 'Radu-Alexandru Stoica',
    logo: 'https://portfolio.smakosh.com/favicon/favicon-512.png',
    author: 'Radu',
    url: 'https://gatsby-theme-portfolio.smakosh.com',
    legalName: 'Radu-Alexandru Stoica',
    defaultDescription: 'This is Radu.',
    socialLinks: {
      github: 'https://github.com/radualex',
      linkedin: 'https://www.linkedin.com/in/rastoica/',
      instagram: 'https://instagram.com/radualex94',
    },
    social: {
      twitter: '@Al_Radu',
    },
    address: {
      city: 'Utrecht',
      country: 'The Netherlands',
    },
    contact: {
      email: `${process.env.EMAIL}`,
    },
    foundingDate: '2020',
  };
  