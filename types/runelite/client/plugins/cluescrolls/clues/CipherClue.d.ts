/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="NullNpcID.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="ClueScroll implements NpcClueScroll.d.ts" />
/// <reference path="LocationClueScroll.d.ts" />
/// <reference path=""BMJ.d.ts" />
/// <reference path="/*.d.ts" />
/// <reference path="new.d.ts" />
/// <reference path="ClueScrollPlugin.d.ts" />
/// <reference path="PanelComponent.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="CipherClue.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
declare namespace net.runelite.client.plugins.cluescrolls.clues {
export class CipherClue extends ClueScroll implements NpcClueScroll, LocationClueScroll
{
	static CipherClue(UIF: "BMJ, base: /*, WorldPoint(3354: new,  2974,  0): new;
);
String text;
int npcId;
WorldPoint location;
String area;
String question;
String answer;
CipherClue(String text, WorldPoint location, String area) 
CipherClue(String text, int npcId, WorldPoint location, String area) 
CipherClue(String text, int npcId, WorldPoint location, String area, String question, String answer) 
	getLocation(plugin: ClueScrollPlugin): net.runelite.api.coords.WorldPoint;
	makeOverlayHint(panelComponent: PanelComponent, plugin: ClueScrollPlugin): void;
	makeWorldOverlayHint(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
	static forText(text: string): CipherClue;
	getNpcs(plugin: ClueScrollPlugin): string[];
	getConfigKeys(): number[];
	private getNpcComposition(plugin: ClueScrollPlugin): NPCComposition;
}
}