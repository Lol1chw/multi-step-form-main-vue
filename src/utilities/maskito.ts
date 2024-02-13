import { maskitoWithPlaceholder } from "@maskito/kit";
import { maskitoAddOnFocusPlugin, maskitoCaretGuard, maskitoPrefixPostprocessorGenerator, maskitoRemoveOnBlurPlugin } from '@maskito/kit';

export const PLACEHOLDER = '+  (   ) ___-__-__';

export const { removePlaceholder, ...placeholderOptions } = maskitoWithPlaceholder(PLACEHOLDER);

export const maskitoOptions = {
  preprocessors: placeholderOptions.preprocessors,
  postprocessors: [maskitoPrefixPostprocessorGenerator('+7'), ...placeholderOptions.postprocessors],
  plugins: [
    maskitoAddOnFocusPlugin('+7 '),
    maskitoRemoveOnBlurPlugin('+7 '),
    maskitoCaretGuard((value, [from, to]) => [
      from === to ? '+7 '.length : 0,
      value.length
    ])
  ],
  mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
};