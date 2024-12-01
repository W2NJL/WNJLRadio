import Foundation
import MediaPlayer

@objc(CarPlayModule)
class CarPlayModule: NSObject {
    // Expose this method to Objective-C for React Native
    @objc func setupCarPlay() {
        let playableContentManager = MPPlayableContentManager.shared()
        playableContentManager.dataSource = self
        playableContentManager.delegate = self
    }

    // Required by React Native to specify if this module needs the main thread
    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

// MARK: - CarPlay Data Source
extension CarPlayModule: MPPlayableContentDataSource {
    func numberOfChildItems(at indexPath: IndexPath) -> Int {
        return 1 // Example: One track
    }

    func contentItem(at indexPath: IndexPath) -> MPContentItem? {
        let item = MPContentItem(identifier: "wnjl-track")
        item.title = "WNJL Radio"
        item.subtitle = "Smooth Jazz"
        item.isPlayable = true
        return item
    }
}

// MARK: - CarPlay Delegate
extension CarPlayModule: MPPlayableContentDelegate {
    func playableContentManager(_ contentManager: MPPlayableContentManager, initiatePlaybackOf contentItem: MPContentItem, completionHandler: @escaping (Error?) -> Void) {
        // Handle playback initiation
        print("Playback initiated for track: \(contentItem.title ?? "Unknown")")
        completionHandler(nil)
    }
}
