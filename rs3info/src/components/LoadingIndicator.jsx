import { usePromiseTracker } from 'react-promise-tracker';
import { PulseLoader } from 'react-spinners';
import '../css/App.css';

const LoadingIndicator = (props) => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress && (
			<div className="empty">
				<h2>Loading!!!</h2>
				<div>
					<PulseLoader color="#2f3237" />
				</div>
			</div>
		)
	);
};

export default LoadingIndicator;
