import '/scss/news.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useTabs } from './components/tabs';
import { useActivitySlider, useArticleSlider } from './components/slider';

useTheme();
useBurger();
useTabs();
useActivitySlider();
useArticleSlider();
