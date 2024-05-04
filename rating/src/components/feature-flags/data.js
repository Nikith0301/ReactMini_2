const dummyApiResponse = {
  showImageSlider: true,
  showLoadMore: true,
  showQrCode: true,
  showScrollIndicator: true,
  showTicTacToe: true,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 5000);
    } else {
      reject("SOme error occured");
    }
  });
}

export default featureFlagsDataServiceCall;
