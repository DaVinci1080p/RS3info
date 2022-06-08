import { usePromiseTracker } from 'react-promise-tracker';
import { PulseLoader } from 'react-spinners';
import '../css/App.css';

const LoadingIndicator = (props) => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress && (
			<div>
				<div className="empty">
					<h2>Loading!!!</h2>
				</div>
				<div>
					<PulseLoader />
				</div>
			</div>
		)
	);
};

export default LoadingIndicator;
