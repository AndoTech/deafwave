/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="FontID.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetPositionMode.d.ts" />
/// <reference path="widgets/WidgetSizeMode.d.ts" />
/// <reference path="widgets/WidgetTextAlignment.d.ts" />
/// <reference path="ChatboxInput implements KeyListener.d.ts" />
/// <reference path="ChatboxTextMenuInput.d.ts" />
/// <reference path="Runnable.d.ts" />
/// <reference path="Entry.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.game.chatbox {
export class ChatboxTextMenuInput extends ChatboxInput implements KeyListener
{
export class Entry
ChatboxPanelManager chatboxPanelManager;
String title;
Runnable onClose;
ChatboxTextMenuInput(ChatboxPanelManager chatboxPanelManager) 
	title(title: string): ChatboxTextMenuInput;
	option(text: string, callback: Runnable): ChatboxTextMenuInput;
	onClose(onClose: Runnable): ChatboxTextMenuInput;
	build(): ChatboxTextMenuInput;
	private open(): void;
	private callback(entry: Entry): void;
	private close(): void;
	keyTyped(e: KeyEvent): void;
	keyPressed(e: KeyEvent): void;
	keyReleased(e: KeyEvent): void;
}
}