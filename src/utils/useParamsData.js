import { useParams } from 'react-router-dom';

import { findDataByText, TruthHelpers } from '.';
import * as truths from '../data';

/**
 * Get truth and node-data based on the URL.
 */
export function useParamsData() {
  const { truth, explanation } = useParams();

  const confirmedTruth = truth && TruthHelpers.wordToNumber(truth);
  const nodeData = findDataByText(truths[truth], explanation);

  return {
    truth: truth && confirmedTruth ? truth : null,
    node: explanation && nodeData ? nodeData : null,
  };
}
