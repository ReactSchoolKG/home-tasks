const eventEmitter = new EventEmitter();

const itemModel = new ItemModel();
const itemView = new ItemView(eventEmitter);
const controller = new Controller(itemModel, itemView, eventEmitter);