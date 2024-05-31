/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default Notification.d.ts" />
/// <reference path="default ClueNestTier.d.ts" />
/// <reference path="default boolean.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.woodcutting {
export interface WoodcuttingConfig extends Config
{
( ) 
( ) 
	statTimeout(): default int;
( ) 
	showNestNotification(): default Notification;
( ) 
	clueNestNotifyTier(): default ClueNestTier;
( ) 
	showWoodcuttingStats(): default boolean;
( ) 
	showRedwoodTrees(): default boolean;
( ) 
	showRespawnTimers(): default boolean;
( ) 
	forestryLeprechaunNotification(): default boolean;
( ) 
	forestryRisingRootsNotification(): default Notification;
( ) 
	forestryStrugglingSaplingNotification(): default Notification;
( ) 
	forestryFloweringTreeNotification(): default Notification;
( ) 
	forestryPoachersNotification(): default Notification;
( ) 
	forestryPheasantControlNotification(): default Notification;
( ) 
	forestryBeeHiveNotification(): default Notification;
( ) 
	forestryEnchantmentRitualNotification(): default Notification;
( ) 
	forestryFriendlyEntNotification(): default Notification;
( ) 
	highlightGlowingRoots(): default boolean;
( ) 
	highlightMulch(): default boolean;
( ) 
	highlightFlowers(): default boolean;
( ) 
	highlightFoxTrap(): default boolean;
( ) 
	highlightPheasantNest(): default boolean;
( ) 
	highlightBeeHive(): default boolean;
( ) 
	highlightRitualCircle(): default boolean;
}
}