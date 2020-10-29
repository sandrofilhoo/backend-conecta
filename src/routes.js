const express = require("express");
const { index } = require("./controllers/ProductController");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const TableController = require("./controllers/TableController");
const SalePanelController = require("./controllers/SalePanelController");
const CalendarController = require("./controllers/CalendarController");
const ConfigController = require("./controllers/ConfigController");
const PercentController = require("./controllers/PercentController");
const MenuController = require("./controllers/MenuController");
const OrderController = require("./controllers/OrderController");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get("/tables", TableController.index);
routes.get("/tables/:id", TableController.show);
routes.post("/tables", TableController.store);
routes.put("/tables/:id", TableController.update);
routes.delete("/tables/:id", TableController.destroy);

routes.get("/panels", SalePanelController.index);
routes.get("/panels/:id", SalePanelController.show);
routes.post("/panels", SalePanelController.store);
routes.put("/panels/:id", SalePanelController.update);
routes.delete("/panels/:id", SalePanelController.destroy);

routes.get("/calendars", CalendarController.index);
routes.get("/calendars/:id", CalendarController.show);
routes.post("/calendars", CalendarController.store);
routes.put("/calendars/:id", CalendarController.update);
routes.delete("/calendars/:id", CalendarController.destroy);

routes.get("/config", ConfigController.index);
routes.get("/config/:id", ConfigController.show);
routes.post("/config", ConfigController.store);
routes.put("/config", ConfigController.update);
routes.delete("/config/:id", ConfigController.destroy);

routes.get("/percents", PercentController.index);
routes.get("/percent/:id", PercentController.show);
routes.post("/percents", PercentController.store);
routes.put("/percent/:id", PercentController.update);
routes.delete("/percent/:id", PercentController.destroy);

routes.get("/menus", MenuController.index);
routes.get("/menu/:id", MenuController.show);
routes.post("/menus", MenuController.store);
routes.put("/menu/:id", MenuController.update);
routes.delete("/menu/:id", MenuController.destroy);

routes.get("/orders", OrderController.index);
routes.get("/order/:id", OrderController.show);
routes.post("/orders", OrderController.store);
routes.put("/order/:id", OrderController.update);
routes.delete("/order/:id", OrderController.destroy);

module.exports = routes;
