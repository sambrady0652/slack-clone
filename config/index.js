module.exports = {
    environment: process.env.NODE_ENV || 'development',
    // port: Number.parseInt(process.env.PORT, 10) || 8081,
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    awsConfig: {
        AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID, // change to yours
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY, // change to yours
        REGION: 'us-east-2', // change to yours
        Bucket: "stack-user-photosd94332e2-2c2a-4c08-8ee9-3fc0cc2f3137" // change to yours
    }
};
