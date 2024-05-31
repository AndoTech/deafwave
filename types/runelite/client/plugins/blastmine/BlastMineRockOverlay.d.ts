/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="NullObjectID.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="BlastMineRock.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, Unmoon <https://github.com/Unmoon>
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
declare namespace net.runelite.client.plugins.blastmine {
export class BlastMineRockOverlay extends Overlay
{
NullObjectID.NULL_28570, NullObjectID.NULL_28571, NullObjectID.NULL_28572, NullObjectID.NULL_28573, NullObjectID.NULL_28574,
NullObjectID.NULL_28575, NullObjectID.NULL_28576, NullObjectID.NULL_28577, NullObjectID.NULL_28578,
ObjectID.HARD_ROCK, ObjectID.HARD_ROCK_28580, ObjectID.CAVITY, ObjectID.CAVITY_28582,
ObjectID.POT_OF_DYNAMITE, ObjectID.POT_OF_DYNAMITE_28584, ObjectID.POT_OF_DYNAMITE_28585, ObjectID.POT_OF_DYNAMITE_28586,
ObjectID.SHATTERED_ROCKFACE, ObjectID.SHATTERED_ROCKFACE_28588);
Client client;
BlastMinePlugin plugin;
BlastMinePluginConfig config;
BufferedImage chiselIcon;
BufferedImage dynamiteIcon;
BufferedImage tinderboxIcon;
BlastMineRockOverlay(Client client, BlastMinePlugin plugin, BlastMinePluginConfig config, ItemManager itemManager) 
	render(graphics: Graphics2D): Dimension;
	private drawIconOnRock(graphics: Graphics2D, rock: BlastMineRock, icon: BufferedImage): void;
	private drawTimerOnRock(graphics: Graphics2D, rock: BlastMineRock, color: Color): void;
	private drawAreaWarning(graphics: Graphics2D, rock: BlastMineRock, color: Color, tiles: Tile[][][]): void;
				//check if tile is empty, or is a wall...
}
}