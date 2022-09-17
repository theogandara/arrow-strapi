module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: 'AKIARIKG4INBNCCLPPDE',
          secretAccessKey: 'Ra7bs8pD9UtgLdCma8z6g/ODxbyUc6W1PZK8hR3F',
          region: 'us-east-1',
          params: {
            Bucket: 'strapi-arrow',
          },
        },
      },
    },
    // ...
  });
