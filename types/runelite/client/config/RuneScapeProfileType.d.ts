/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="RuneScapeProfileType.d.ts" />
/*
 * Copyright (c) 2020 Abex
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
declare namespace net.runelite.client.config {
enum RuneScapeProfileType
{
	// This enum should be ordinal-stable; new entries should only be added to the
	// end and entries should never be removed
STANDARD(client -> true), BETA(client -> client.getWorldType().contains(WorldType.NOSAVE_MODE) || client.getWorldType().contains(WorldType.BETA_WORLD)), QUEST_SPEEDRUNNING(client -> client.getWorldType().contains(WorldType.QUEST_SPEEDRUNNING)), DEADMAN(client -> client.getWorldType().contains(WorldType.DEADMAN)), PVP_ARENA(client -> client.getWorldType().contains(WorldType.PVP_ARENA)), TRAILBLAZER_LEAGUE, DEADMAN_REBORN, SHATTERED_RELICS_LEAGUE, TRAILBLAZER_RELOADED_LEAGUE(client -> client.getWorldType().contains(WorldType.SEASONAL)), ;  Predicate<Client> test;  RuneScapeProfileType() 
	static getCurrent(client: Client): RuneScapeProfileType;
}
}