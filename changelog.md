# Changelog

## [Unreleased]

### TODO

- improve push notification
- serve icon files
- load older messages on scroll up
- on delete msg prevent list update
- common socket id for all rooms
- status of sent messages progress by icon
- add notification popup for error and success messages
- keep socket connected for all rooms as long as window open
- theme - dark and light
- send message after request accept
- integrate ng-rxform and improve it
- make models on angular side for message, room and user

# Changelog

## [V2.1.0] - 2020-01-09

### Added

- Fetch older messages

## [V2.0.0] - 2019-12-30

### Added

- Notication push
- custom icon added
- typing status show to other
- case insensitive email login or user login
- remember me function

## [V1.1.0] - 2019-12-30

### Fixed

- Ui Imprvements

## [V1.0.7] - 2019-12-26

### Added

- Show name of User at top
- active/inactive status

### Fixed

- Fixed message send on multiple clicks/sends
- fetch last 30 messages in room by id api call

## [V1.0.6] - 2019-12-23

### Fixed

- Fixed offline support
- message clear of only user who sent it not others in input

## [V1.0.5] - 2019-12-18

### Added

- lazy load remaining modules
- update profile icon and route in header

### Fixed

- access room by id in url
- always show three dots in mobile views

### Removed

- remove storing chats in localstorage

## [V1.0.4] - 2019-12-11

### Added

- turn into PWA

## [V1.0.3] - 2019-11-15

### Added

- show recent chats with ui
- join room by id

## [V1.0.2] - 2019-11-14

### Fixed

- Fixed http redirect to https not taking place on heroku

### Added

- show three dots on hover

## [V1.0.1] - 2019-11-13

### Added

- Add Angular functionality for deleting single message

## [v1.0.0] - 2019-11-12

### Added

- Added prettier eslint
- add nested schema for message
- add api for deleting single message
- fetch last 100 messages in a chat

### Fixed

- Fixed date change from initaialisation of message list
