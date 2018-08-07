import CMS from 'netlify-cms'

// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from "./customPathImage.js";

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import HotelPagePreview from './preview-templates/HotelPreview'
import DefaultPagePreview from './preview-templates/DefaultPagePreview'
import MissionPagePreview from './preview-templates/MissionPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'
import CareersPagePreview from './preview-templates/CareersPagePreview'

// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('hotels', HotelPagePreview)
CMS.registerPreviewTemplate('legals', DefaultPagePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)
CMS.registerPreviewTemplate('careers', CareersPagePreview)
