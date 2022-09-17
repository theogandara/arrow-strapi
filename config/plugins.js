module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: process.env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: process.env('AWS_ACCESS_SECRET'),
          region: 'us-east-1',
          params: {
            Bucket: 'strapi-arrow',
          },
        },
      },
    },
    // ...
  });
