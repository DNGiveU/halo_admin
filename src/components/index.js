import Vue from 'vue'

// pro components
import Ellipsis from '@/components/Ellipsis'
import FooterToolbar from '@/components/FooterToolbar'
import Upload from '@/components/Upload/Upload'
import FilePondUpload from '@/components/Upload/FilePondUpload'

const _components = {
  Ellipsis,
  FooterToolbar,
  Upload,
  FilePondUpload
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
