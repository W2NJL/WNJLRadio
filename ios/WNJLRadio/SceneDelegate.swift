import UIKit
import CarPlay

class SceneDelegate: UIResponder, UIWindowSceneDelegate, CPTemplateApplicationSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let carPlayScene = scene as? CPTemplateApplicationScene else {
            print("Not a CarPlay Scene")
            return
        }

        print("CarPlay scene detected")

        // Set up a simple list template for CarPlay
        let listItem = CPListItem(text: "WNJL Radio", detailText: "Smooth Jazz")
        let listSection = CPListSection(items: [listItem])
        let listTemplate = CPListTemplate(title: "Now Playing", sections: [listSection])

        carPlayScene.interfaceController?.setRootTemplate(listTemplate, animated: true)
        carPlayScene.delegate = self
    }

    func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didConnect interfaceController: CPInterfaceController) {
        print("CarPlay interface connected")
    }

    func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectWith error: Error?) {
        print("CarPlay interface disconnected")
    }
}