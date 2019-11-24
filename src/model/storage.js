import localforage from "localforage"

localforage.config({
    name        : 'limelight',
    storeName   : 'limelight', // Should be alphanumeric, with underscores.
    description : 'limelight'
});

export default localforage