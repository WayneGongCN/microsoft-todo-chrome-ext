/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */
import msalInstance from '../helpers/msal';
window.msalInstance = msalInstance;

import { Task, Tasklist } from '../models/Task';
window.Task = Task;
window.Tasklist = Tasklist;

import getStore from '../reducers';
window.getStore = getStore;

import { QUICK_ADD_MENU_ITEM, handleQuickAddMenuItemEvent } from '../menus/quickAdd';


chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create(
    QUICK_ADD_MENU_ITEM,
    () => {
      if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError.message);
      }
    },
  );
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  handleQuickAddMenuItemEvent(info, tab);
});
