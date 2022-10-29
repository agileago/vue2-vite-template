import { defineComponent } from 'vue'
import './theme/app.scss'

export const App = defineComponent({
  setup() {
    return () => (
      <div class={'flex text-amber-300'}>
        <router-view />
      </div>
    )
  },
})
