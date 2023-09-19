import Vue from "vue"
import "element-ui/lib/theme-chalk/index.css"

import {
  Header, Container, Main, Footer,
  Button, Input, Avatar, Image,
  Link, Divider, Notification,Drawer,
  Message,Select,Option,DatePicker,ColorPicker,Slider
} from "element-ui"

Vue.use(Button)
Vue.use(Header)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Avatar)
Vue.use(Input)
Vue.use(Image)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(ColorPicker)
Vue.use(Slider)
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;