import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useScrollHeader } from './components/scrollHeader';
import { useAccordion } from './components/accordion';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/slider';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
useAccordion();
