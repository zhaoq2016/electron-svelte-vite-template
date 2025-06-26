interface ElectronAPI {
	sendMessage: (message?: any) => void;
}

interface Window {
	electronAPI?: ElectronAPI;
}