/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/*
 * Copyright (c) 2018, Morgan Lewis <https://github.com/MESLewis>
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
declare namespace net.runelite.client.ui.overlay.worldmap {
export class WorldMapPoint
{
BufferedImage image;
WorldPoint worldPoint;
	/**
	 * The WorldPoint which the worldmap will jump to when clicked
	 */
WorldPoint target;
	/**
	 * The point on the image that will be drawn at WorldPoint
	 * WorldMapPointManager will center the image if imagePoint is null
	 */
Point imagePoint;
boolean snapToEdge;
boolean currentlyEdgeSnapped;
	/**
	 * Whether or not the map jumps to target, or worldPoint when the overlay is clicked
	 */
boolean jumpOnClick;
	/**
	 * Name in menu option when {@link #jumpOnClick} is set
	 */
String name;
String tooltip;
WorldMapPoint(WorldPoint worldPoint, BufferedImage image) 
	onEdgeSnap(): void;
	onEdgeUnsnap(): void;
}
}