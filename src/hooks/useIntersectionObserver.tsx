import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	const callBackFunction = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callBackFunction, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [options]);

	return [containerRef, isVisible];
};

export default useIntersectionObserver;
