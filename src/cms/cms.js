import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import HotelPagePreview from './preview-templates/HotelPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import DefaultPagePreview from './preview-templates/DefaultPagePreview'
import MissionPagePreview from './preview-templates/MissionPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('hotels', HotelPagePreview)
CMS.registerPreviewTemplate('legals', DefaultPagePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)
