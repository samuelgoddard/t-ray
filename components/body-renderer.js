import BlockContentWrapper from '@/components/block-content-wrapper'
import ContentFull from '@/components/content-full'
import TourDates from '@/components/tour-dates'
import Heading from '@/components/heading'
import Content50 from '@/components/content-50'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

const bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="mb-[10vw] md:mb-[16vw]">
        {children}
      </div>
  },
  tourDates: {
    component: TourDates,
    wrapper: ({ children }) => 
      <div className="mb-[20vw] md:mb-[16vw]">
        {children}
      </div>
  },
  heading: {
    component: Heading,
    wrapper: ({ children }) => 
      <div className="mb-[20vw] md:mb-[16vw]">
        {children}
      </div>
  },
  contentFull: {
    component: ContentFull,
    wrapper: ({ children }) => 
      <div className="mb-[10vw] md:mb-[16vw] transition-colors ease-in-out duration-500">
        {children}
      </div>
  },
  halfContent: {
    component: Content50,
    wrapper: ({ children }) => 
      <div className="mb-[10vw] md:mb-[16vw]">
        {children}
      </div>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;