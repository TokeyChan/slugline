# Slugline Editor

Grundidee: Das Webpack des Editors wird innerhalb des electron_slugline Projekts erstellt. Jeder API-Call, der im Electron auf eine Node API verweisen muss, soll über eine API Schnittstelle verlaufen, die an das window-Element gekoppelt ist. Dadurch können dann, um das Ding webfähig zu machen, einfach diese Schnittstellen ausgetauscht und durch Web-Schnittstellen ersetzt werden.

## Aufbau der Klassen

### SluglineEditorElement
Das ist das einzige Element, das vom Anwender selbst überhaupt im HTML eingesetzt wird. Der Rest wird automatisch von einem parent SluglineEditor erstellt!
Inheritet von einem HTML Div Element

#### Editor Properties
cursor:
Eine Instanz der Cursor Klasse

buffer:


### SluglineHeadingElement
Markiert einen Szenenbeginn
Inheritet von einem HTML H1 Element
