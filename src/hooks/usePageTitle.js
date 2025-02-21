import {useEffect} from 'react'

export const usePageTitle = (title) => {
	useEffect(() => {
		document.title = `${title} | MovieVerse`;
	});

  return null
}
