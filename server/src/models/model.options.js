const modelOptions =  {
    toJSON: {
        viturals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj;
        }
    }, 
    toObject: {
        viturals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj;
        }
    },
    versionKey: false,
    timestamps: true
};

export default modelOptions;