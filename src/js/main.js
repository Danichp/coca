import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useScrollHeader } from './components/scrollHeader';
import { useInsightSlider, usePartnersSlider } from './components/slider';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
