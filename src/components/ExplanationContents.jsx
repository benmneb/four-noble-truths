import * as truths from '../data';

import { useStore } from '../store';
import { useParamsData } from '../utils';
import { DefaultQuote, ExplanationDetails } from './index';

export default function ExplanationContents() {
  const { truth } = useParamsData();
  const hoverTruth = useStore((state) => state.hoverTruth);

  const whatToShow = hoverTruth ? hoverTruth : truth;

  if (truths?.[whatToShow])
    return <ExplanationDetails source={truths[whatToShow]} />;

  return <DefaultQuote />;
}
