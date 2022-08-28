import React, { useEffect } from 'react';
import AdCardDetailed from './AdCardDetailed';
import Loader from './Loader';
import actionAdById from '../actions/actionAdById';
import { connect } from 'react-redux';

const PageAds = ({ match: { params: { _id } }, onIdChange, ad }) => {
    useEffect(() => {
        onIdChange(_id)
    }, [_id])
    console.log("AD: ", ad);
    return (
        ad ? <AdCardDetailed key={ad._id} ad={ad} /> : <Loader />
    )
}
const CPageAds = connect(state => ({ ad: state.info?.goodById?.payload }), { onIdChange: actionAdById })(PageAds);

export default CPageAds;
