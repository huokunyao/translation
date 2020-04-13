
import Home from './../view/home/home.vue';
import Translate from './../view/translate/index.vue';
import Circle from './../view/echarts/circle.vue'

const mainRouter = [
    {
        path:'/',
        component: Home,
        children: [
          { path: 'translate',component: Translate },
          { path: 'circle',component: Circle },
        ]
    }
]

export default mainRouter;