import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Dropdown,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  DatePicker,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tag,
  Tree,
  Row,
  Col,
  Upload,
  Card,
  Carousel,
  CarouselItem,
  Image,
  Loading,
  MessageBox,
  Message,
  Notification,
  Drawer,
  Popconfirm,
  DropdownMenu,
  DropdownItem,

  // Autocomplete,
  // MenuItemGroup,
  // InputNumber,
  // Radio,
  RadioGroup,
  RadioButton,
  // CheckboxButton,
  CheckboxGroup,
  // Switch,
  // OptionGroup,
  // ButtonGroup,
  // TimeSelect,
  // TimePicker,
  Popover,
  // Tooltip,
  // Tabs,
  // TabPane,
  // Alert,
  // Slider,
  // Icon,
  // Progress,
  // Spinner,
  // Badge,
  // Rate,
  // Steps,
  // Step,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  // Timeline,
  // TimelineItem,
  // Link,
  // Divider,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
} from 'element-ui';

import Scrollbar from 'element-ui/lib/scrollbar' // 必须单独引入

// 必须定义在一个新的变量 ==> 否则会抛出_MessageBox is define的bug
const msgbox = MessageBox 
const { alert, confirm, prompt } = msgbox

// Vue.component(Pagination.name, Pagination)
// Vue.component(Scrollbar.name, Scrollbar)
Vue.use(Scrollbar);  // 注册单独引入的隐藏组件
Vue.use(Drawer); 
Vue.use(Popconfirm); 
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading.directive);

// Vue.use(Autocomplete);
// Vue.use(MenuItemGroup);
// Vue.use(InputNumber);
// Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(CheckboxGroup);
// Vue.use(CheckboxButton);
// Vue.use(Switch);
// Vue.use(OptionGroup);
// Vue.use(ButtonGroup);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Progress);
// Vue.use(Spinner);
// Vue.use(Badge);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
// Vue.use(Link);
// Vue.use(Divider);
// Vue.use(Calendar);
// Vue.use(Backtop);
// Vue.use(PageHeader);
// Vue.use(CascaderPanel);

// Vue.prototype.$loading = Loading.service;
// elements.js?9df0:161 Uncaught ReferenceError: _MessageBox is not defined
Vue.prototype.$msgbox = msgbox;
Vue.prototype.$alert = alert;
Vue.prototype.$confirm = confirm;
Vue.prototype.$prompt = prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;