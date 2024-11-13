import { useParams } from 'react-router-dom';
import * as truths from '../data';

import { useStore } from '../store';
import { useParamsData } from '../utils';
import { DefaultQuote, ErrorPage, ExplanationDetails } from './index';

export default function ExplanationContents() {
  const { truth: confirmedTruth } = useParamsData();
  const { truth: paramTruth } = useParams();
  const hoverTruth = useStore((state) => state.hoverTruth);

  const whatToShow = hoverTruth || confirmedTruth;

  if (truths?.[whatToShow])
    return <ExplanationDetails source={truths[whatToShow]} />;

  if (paramTruth && !confirmedTruth) return <ErrorPage />;

  return <DefaultQuote />;
}
